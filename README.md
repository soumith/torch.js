torch.js
========

nodejs bindings for libTH (tensor library that powers torch). for fun!

```
# download and install dependencies
git clone https://github.com/soumith/torch.js.git
cd torch.js && npm install

# for OSX
export DYLD_LIBRARY_PATH=[path to libTH.dylib]

# for Linux 
export LD_LIBRARY_PATH=[path to libTH.so]

# run the test to see the magic happen
node test.js
```