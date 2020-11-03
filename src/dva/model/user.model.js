import Model from '~/decorator/model';
import Helper from '~/decorator/helper';

@Model
export default class extends Helper.transform({
    namespace: 'loanDetail',

    state: {
        config: [],
        data: {},
        isShowPopup: false,
        imageUrl: null,
        isError: false,
    },

    subscriptions: {}
}) { };