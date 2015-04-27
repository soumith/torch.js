cmake_minimum_required(VERSION 2.8)

project(torch)

include_directories(${CMAKE_JS_INC})

ADD_SUBDIRECTORY(lib)

file(GLOB SOURCE_FILES "src/*.cc" "src/*.h")

add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} TH)
