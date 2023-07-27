const { getFontSize } = require("../util/fontScale");

export const size= {
    font14: getFontSize(14),
    font15: getFontSize(15),
    font16: getFontSize(16),
    font17: getFontSize(17),
    font18: getFontSize(18),
    font19: getFontSize(19),
    font20: getFontSize(20),
    font21: getFontSize(21),
    font22: getFontSize(22),
    font23: getFontSize(23),
    font24: getFontSize(24),
    font32: getFontSize(32),
    font36: getFontSize(36),
    font50: getFontSize(50),
};

export const weight= {
    full: '900',
    semi: '600',
    mid: '500',
    low: '400',
    bold: 'bold',
    normal: 'normal'
};

export const type= {
   regular: 'Inter-Regular',
   medium: 'Inter-Medium',
   bold: 'Inter-Bold' 
};