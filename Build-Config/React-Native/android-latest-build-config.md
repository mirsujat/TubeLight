#### * 1: In your root build.gradle, update the Gradle plugin so that it uses Gradle 3+:

```
...
dependencies {
    classpath 'com.android.tools.build:gradle:2.3.0'
...
```

#### * 2: Then, in your app/build.gradle, update the build tools to the latest (25), because it's mandatory to support Gradle 3+:

```
...
android {
    compileSdkVersion 23
    buildToolsVersion '25.0.2'
...
```

#### * 3: Optionaly, if you have set distributionUrl in your gradle/wrapper/gradle-wrapper.properties file, you may want to replace it with:

```
distributionUrl=https\://services.gradle.org/distributions/gradle-3.5-bin.zip
```

#### * 4 : [Issue] error: The SDK Build Tools revision (23.0.1) is too low for project ':react-native-vector-icons'. Minimum required is 25.0.0

#### Workaround:

overwrite the build tools version of your dependencies To do so, copy and paste in your root build.gradle:

```
ext {
    compileSdkVersion = 23
    buildToolsVersion = '25.0.2'
}
subprojects { subproject ->
    afterEvaluate{
        if((subproject.plugins.hasPlugin('android') || subproject.plugins.hasPlugin('android-library'))) {
            android {
                compileSdkVersion rootProject.ext.compileSdkVersion
                buildToolsVersion rootProject.ext.buildToolsVersion
            }
        }
    }
}
```

#### And in your app/build.gradle, replace:

```
...
android {
    compileSdkVersion rootProject.ext.compileSdkVersion
    buildToolsVersion rootProject.ext.buildToolsVersion
...
```

Congratulations, you can now enjoy Gradle 3 build against the latest version of Android build-tools, thus boosting your compilation time.
