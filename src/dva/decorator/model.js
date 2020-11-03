import Helper from '~/decorator/helper';

export default function Model(target) {
  Helper.addModel(target);
  return target;
}
