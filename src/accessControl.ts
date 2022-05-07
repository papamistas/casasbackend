import { newModel, MemoryAdapter } from "casbin.js";

export const model = newModel(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new MemoryAdapter(`
p, admin, casas, (list)|(create)|(edit)
p, admin, destinos, (list)|(create)
p, admin, tipos, (list)|(create)|(edit)

p, editor, casas, list
p, editor, destinos, list
p, editor, tipos, list
`);
