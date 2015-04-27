var storage = module.exports = {};

storage.new = function () {
    var s2 = {}
    for (var v in storage) {
	s2[v] = s[v]
    }
    return s2
}
