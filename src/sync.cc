#include <nan.h>
#include "sync.h"

using v8::Number;

NAN_METHOD(hello) {
  NanScope();

  // expect a number as the first argument
  int points = args[0]->Uint32Value();
  double est = points + 1;

  NanReturnValue(NanNew<Number>(est));
}
