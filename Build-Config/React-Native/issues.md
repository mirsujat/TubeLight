## Issue Index:

* 1.  react-native run-android - Error: File path too long on Windows
* 2.  Failed to crunch file - Android studio (app:mergeDebugResources)
* 3.  failed to find target with hash string 'android-26'
* 4.  the module `Ionicons` could not be found within the package

#### Issue 1: react-native run-android - Error: File path too long on Windows, keep below 240 characters or npm run android - Error: File path too long on Windows, keep below 240 characters

#### solution:

Change your build directory for your project since that is where most of the path issues will arise.
In your root build.gradle file

```
    allprojects {
     buildDir = "C:/tmp/${rootProject.name}/${project.name}"
     repositories {
         ...
        }
    }
```

#### Issue 2: Failed to crunch file - Android studio (app:mergeDebugResources)

Failed to crunch file means studio can't process the file. Its too long and it has reached the max file path line of the operating system.

#### Solution:

Better way is to change the build directory of the project in the build.gradle file (Project)

```
    allprojects {
        buildDir = "C:/tmp/${rootProject.name}/${project.name}"
        repositories {
        ...
        }
    }
```

#### Issue 3: failed to find target with hash string 'android-26'

#### workaround:

```
add the following code in your root build.gradle and ## not the app/build.gradle.

subprojects {
    ext {
        compileSdk = 23
        buildTools = "23.0.1"
        minSdk = 16
        targetSdk = 22
    }

    afterEvaluate { project ->
        if (!project.name.equalsIgnoreCase("app")
                && project.hasProperty("android")) {
            android {
                compileSdkVersion compileSdk
                buildToolsVersion buildTools
                defaultConfig {
                  minSdkVersion minSdk
                  targetSdkVersion targetSdk
                }
            }
        }
    }
}
```

Also if anyone read this, if you implement the workaround make sure you put the "workaround" in your root build.gradle and not the app/build.gradle. This does make THIS library work.

## [Unfortunately, broke some other stuff though.]

### Issue 4:

error: bundling failed: Error: While resolving module `react-native-vector-icons/Ionicons`, the Haste package `react-native-vector-icons` was found. However the module `Ionicons` could not be found within the package

### workaround

* Best way

```
place this line of code in rn-cli-config.js in your root rpoject folder

const blacklist = require('metro/src/blacklist');
module.exports = {
  getBlacklistRE() {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
  }
};
```

### or

* Good Way

I added this to package.json using RN v0.52

```
"scripts": {
    "postinstall": "rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json”
}
```

### Issue 5: Update Android dependencies

Fixes #12929 by using newer versions of Android dependencies:

* Updated Android SDK 23 to 25
* Updated Build Tools from 23.0.1 to 25.0.2
* Updated compileSdkVersion and targetSdkVersion to 25
* Updated AppCompat from 23.0.1 to 25.2.0
