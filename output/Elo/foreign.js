const EloRank = require('elo-rank');
const elo = new EloRank(15);

const updateImpl = (mkRes) => (w) => (l) => {
    const exp_w = elo.getExpected(w, l);
    const exp_l = elo.getExpected(l, w);
    const new_w = elo.updateRating(exp_w, 1, w);
    const new_l = elo.updateRating(exp_l, 0, l);
    return mkRes(new_w)(new_l);
};

exports.updateImpl = updateImpl;
