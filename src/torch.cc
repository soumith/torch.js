#include <nan.h>
#include "sync.h"

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;

void InitAll(Handle<Object> exports) {
  exports->Set(NanNew<String>("hello"),
	       NanNew<FunctionTemplate>(hello)->GetFunction());
}

NODE_MODULE(torch, InitAll)
