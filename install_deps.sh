cmake -S ./nitro_deps -B ./build_deps/nitro_deps
make -C ./build_deps/nitro_deps -j 10
rm -r ./build_deps/nitro_deps