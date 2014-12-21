# call this, then remove the lapack calls for the non-float types, and the THVector* functions
ffi-generate -f ~/torch-distro/install/include/TH/TH.h -l libTH -L /Library/Developer/CommandLineTools/usr/lib/ -m TH -p TH -s --I ~/torch-distro/install/include/TH/ >TH.js

# then add ~/torch-distro/install/lib to DYLD_LIBRARY_PATH

