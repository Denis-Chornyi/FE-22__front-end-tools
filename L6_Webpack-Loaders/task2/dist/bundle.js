(() => {
  'use strict';
  (o => {
    const { name: e, company: n } = { name: 'Tom', age: 17, company: 'Gromcode' };
    console.log(`${e} from ${n}`);
  })();
  const o = [1, 2, [3, 4, [5, 6]]].flat(2);
  console.log(o), Promise.resolve().finally();
})();
