FROM  ubuntu:16.04
LABEL maintainer="developer [at] ghostthinker [dot] de"

ENV DEBIAN_FRONTEND=noninteractive \
    ANDROID_HOME=/opt/android-sdk-linux \
    NODE_VERSION=10.15.3 \
    NPM_VERSION=6.4.1 \
    IONIC_VERSION=4.12.0 \
    CORDOVA_VERSION=9.0.0\
    GRADLE_VERSION=5.3.1 \
    YARN_VERSION=1.15.2

# Install basics
RUN apt-get update &&  \
    apt-get install -y git wget curl unzip build-essential ruby ruby-dev ruby-ffi gcc make && \
    curl --retry 3 -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \
    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \
    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \
    npm install -g npm@"$NPM_VERSION" && \
    npm install -g cordova@"$CORDOVA_VERSION" ionic@"$IONIC_VERSION" && \
    npm install -g yarn@"$YARN_VERSION" && \
    npm cache clear --force && \
    gem install sass && \
    mkdir Sources
#ANDROID
#JAVA

# install python-software-properties (so you can do add-apt-repository)
RUN apt-get update && apt-get install -y -q python-software-properties software-properties-common  && \
    add-apt-repository ppa:webupd8team/java -y && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get update && apt-get -y install oracle-java8-installer

#ANDROID STUFF
RUN echo ANDROID_HOME="${ANDROID_HOME}" >> /etc/environment && \
    dpkg --add-architecture i386 && \
    apt-get update && \
    apt-get install -y --force-yes expect ant wget zipalign libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 qemu-kvm kmod && \
    apt-get clean && \
    apt-get autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Android SDK
RUN cd /opt && \
    wget --output-document=android-sdk-linux.tgz --quiet http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz && \
    tar xzf android-sdk-linux.tgz && \
    rm -f android-sdk-linux.tgz && \
    chown -R root. /opt

# Install Gradle
RUN wget https://services.gradle.org/distributions/gradle-"$GRADLE_VERSION"-bin.zip && \
    mkdir /opt/gradle && \
    unzip -d /opt/gradle gradle-"$GRADLE_VERSION"-bin.zip && \
    rm -rf gradle-"$GRADLE_VERSION"-bin.zip

# Setup environment

ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:/opt/tools:/opt/gradle/gradle-"$GRADLE_VERSION"/bin

# Install Android SDK
RUN echo 'y' | /opt/android-sdk-linux/tools/android update sdk -u -a -t platform-tools,build-tools-28.0.3,build-tools-28.0.6,android-28,build-tools-27.0.3,android-27,build-tools-25.0.3,android-25,extra-android-support,extra-google-m2repository,extra-android-m2repository
RUN cordova telemetry off

WORKDIR Sources
EXPOSE 8100 35729

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["ionic", "serve"]

# Start: docker run -ti --rm -p 8100:8100 -p 35729:35729 -v /home/bernd/WebStormProjects/edubreak_app/:/Sources:rw eb/ionic
# Check for devices: docker run -ti --rm -p 8100:8100 -p 35729:35729 --privileged -v /dev/bus/usb:/dev/bus/usb -v /home/bernd/WebStormProjects/edubreak_app/:/Sources:rw eb/ionic adb devices
# Build Container: docker build -t eb/ionic .
# Run app on device: sudo docker run -ti --rm -p 8100:8100 -p 35729:35729 --privileged -v /dev/bus/usb:/dev/bus/usb -v /home/bernd/WebStormProjects/edubreak_app/:/Sources:rw eb/ionic /bin/bash -c "adb devices && ionic cordova run android"
