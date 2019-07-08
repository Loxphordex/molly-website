// this is all data for images displayed in the gallery
// each key in galleryImages represents a category

const baseUrl = 'https://res.cloudinary.com/dghqlm5xb/image/upload/'

const galleryImages =  {
  pencil: [
    // page 1
    { url: `${baseUrl}v1561859393/Molly%20Art/28115499110_2a7cf572ae_o_ljznxz.jpg`, name: 'flow', year: '2017' },
    { url: `${baseUrl}v1561859420/Molly%20Art/29148719803_354f11f8f7_o_ebqnkj.jpg`, name: 'Morcous' },
    { url: `${baseUrl}v1561859440/Molly%20Art/29707078465_da0cb454a9_o_z4vcbv.jpg`, name: 'Head' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859645/Molly%20Art/40551484353_67a65ed712_o_mzpan0.jpg', name: 'froge' },
    { url: `${baseUrl}v1561859547/Molly%20Art/32956442506_45e3716df1_o_pqbbwo.jpg`, name: 'Lips' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859696/Molly%20Art/46567380945_464052af3b_o_lc8rny.jpg', name: 'Rocks' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859691/Molly%20Art/46602035225_31fdf76c76_o_ngiijj.jpg', name: 'Hearts' },
    { url: `${baseUrl}v1561859607/Molly%20Art/42693539092_f292f62491_o_eajhx0.jpg`, name: 'Kurn' },
    { url: `${baseUrl}v1561859597/Molly%20Art/41843179785_360661ebd9_o_l1visn.jpg`, name: 'Pop Art' },
    { url: `${baseUrl}v1561859600/Molly%20Art/42025602574_902f34ee9b_o_labgxb.jpg`, name: 'Round Corn' },
    { url: `${baseUrl}v1561859600/Molly%20Art/42025602394_b0aa230b1d_o_dvfeea.jpg`, name: 'Long Corn' },
    { url: `${baseUrl}v1561859604/Molly%20Art/42693538872_b655377b64_o_gxxqgs.jpg`, name: 'Corm' },
    
    // page 2
    { url: `${baseUrl}v1561859603/Molly%20Art/42693538192_8c2da5a196_o_ztr0hr.jpg`, name: 'Stripper' },
    { url: `${baseUrl}v1561859629/Molly%20Art/44170270625_0c90e46d60_o_umupah.jpg`, name: 'Pof' },
    { url: `${baseUrl}v1561859644/Molly%20Art/43905708954_7a0ebf0e28_o_1_qikylg.jpg`, name: 'Ghost Peach' },
    { url: `${baseUrl}v1561859648/Molly%20Art/45391373431_45b875ecef_o_bduiup.jpg`, name: 'Pho' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859559/Molly%20Art/32961023425_9f741696b1_o_xfj5j5.jpg', name: 'btrfly' },
    { url: `${baseUrl}v1561859655/Molly%20Art/44675199855_9942bb696b_o_a71mdw.jpg`, name: 'Adorable Drawing' },
    { url: `${baseUrl}v1561859674/Molly%20Art/46447415615_03ff153da2_o_w3j5fn.jpg`, name: 'Sexy Pig' },
    { url: `${baseUrl}v1561859682/Molly%20Art/46561282461_2a56f73863_o_a2dvr1.jpg`, name: 'Sparkles' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859553/Molly%20Art/32540687337_1c43987332_o_vjz5fz.jpg', name: 'Ancient' },
    { url: `${baseUrl}v1561859508/Molly%20Art/31712896597_400373ff69_o_iynou3.jpg`, name: 'Levels' },
  ],

  penandink: [
    // page 1
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859690/Molly%20Art/47116769691_fdcbd812fc_o_ymjetd.jpg', name: 'Yabebe' },
    { url: '' }
  ],

  sculpture: [
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28397966725_a4fb06d3a5_o_esulay.jpg', name: 'Usula' }
  ],

  digital: [
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859691/Molly%20Art/underthedome_ikye2v.jpg', name: 'Dome' }
  ]
};

export default galleryImages;