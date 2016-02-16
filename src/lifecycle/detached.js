import data from '../util/data';

export default function (opts) {
  const { detached } = opts;
  return detached ? function () {
    let info = data(this);
    if (info.detached) return;
    info.detached = true;
    info.attached = false;
    detached(this);
  } : undefined;
}
