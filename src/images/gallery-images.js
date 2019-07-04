// this is all data for images displayed in the gallery
// each key in galleryImages represents a category

const baseUrl = 'https://res.cloudinary.com/dghqlm5xb/image/upload/'

const galleryImages =  {
  demo: [
    // page 1
    { url: `${baseUrl}v1561859962/Molly%20Art/29726407922_a30593e080_o_h2peck.jpg`, name: '1' },
    { url: `${baseUrl}v1561859696/Molly%20Art/46567380945_464052af3b_o_lc8rny.jpg`, name: '2' },
    { url: `${baseUrl}v1561859691/Molly%20Art/underthedome_ikye2v.jpg`, name: 'Nice Picture' },
    { url: `${baseUrl}v1561859679/Molly%20Art/mazeisland1000_eksmhf.jpg`, name: 'Placeholder Name' },
    { url: `${baseUrl}v1561859601/Molly%20Art/42330993120_1a7658ee11_o_1_i6zpxf.jpg`, name: 'Tuft!' },
    { url: `${baseUrl}v1561859587/Molly%20Art/31718711010_a42602eccc_o_oezfqp.jpg`, name: 'Avo' },
    { url: `${baseUrl}v1561859547/Molly%20Art/32956442506_45e3716df1_o_pqbbwo.jpg`, name: 'lips' },
    { url: `${baseUrl}v1561859504/Molly%20Art/31283468553_9c2b1d32bf_o_nnrfhr.jpg`, name: 'swirls' },
    { url: `${baseUrl}v1561859488/Molly%20Art/29726405722_11c764843f_o_vkipqe.jpg`, name: 'Fetus' },
    { url: `${baseUrl}v1561859451/Molly%20Art/24699904278_629fa97a0b_o_hzrozj.jpg`, name: 'Comic' },
    { url: `${baseUrl}v1561859440/Molly%20Art/29707078465_da0cb454a9_o_z4vcbv.jpg`, name: 'Horms' },
    { url: `${baseUrl}v1561859393/Molly%20Art/28115499110_2a7cf572ae_o_ljznxz.jpg`, name: 'Flow' },

    // page 2
    { url: `${baseUrl}v1561859393/Molly%20Art/27782413833_d7c8bc7572_o_j7rcrd.jpg`, name: 'Lil Cam' },
    { url: `${baseUrl}v1561859394/Molly%20Art/28398311405_44befe467b_o_yyns21.jpg`, name: 'Purp' }
  ],

  graphite: [
    // page 1
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28115499110_2a7cf572ae_o_ljznxz.jpg', name: 'flow' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859420/Molly%20Art/29148719803_354f11f8f7_o_ebqnkj.jpg', name: 'Morcous' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859440/Molly%20Art/29707078465_da0cb454a9_o_z4vcbv.jpg', name: 'Head' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859508/Molly%20Art/31712896597_400373ff69_o_iynou3.jpg', name: 'Levels' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859547/Molly%20Art/32956442506_45e3716df1_o_pqbbwo.jpg', name: 'Lips' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859565/Molly%20Art/33506327164_b27a79d6b4_o_rskj4o.jpg', name: 'Bods' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859585/Molly%20Art/33537449543_c20111c5eb_o_pkzb4z.jpg', name: 'Bods2' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859597/Molly%20Art/41843179785_360661ebd9_o_l1visn.jpg', name: 'Pop Art' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859600/Molly%20Art/42025602574_902f34ee9b_o_labgxb.jpg', name: 'Round Corn' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859600/Molly%20Art/42025602394_b0aa230b1d_o_dvfeea.jpg', name: 'Long Corn' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859603/Molly%20Art/42693538192_8c2da5a196_o_ztr0hr.jpg', name: 'Stripper' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859604/Molly%20Art/42693538872_b655377b64_o_gxxqgs.jpg', name: 'Corm' },
    
    // page 2
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859607/Molly%20Art/42693539092_f292f62491_o_eajhx0.jpg', name: 'Kurn' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859629/Molly%20Art/44170270625_0c90e46d60_o_umupah.jpg', name: 'Pof' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859644/Molly%20Art/43905708954_7a0ebf0e28_o_1_qikylg.jpg', name: 'Ghost Peach' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859648/Molly%20Art/45391373431_45b875ecef_o_bduiup.jpg', name: 'Pho' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859655/Molly%20Art/44675199855_9942bb696b_o_a71mdw.jpg', name: 'Adorable Drawing' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859674/Molly%20Art/46447415615_03ff153da2_o_w3j5fn.jpg', name: 'Sexy Pig' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859682/Molly%20Art/46561282461_2a56f73863_o_a2dvr1.jpg', name: 'Sparkles' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859690/Molly%20Art/47116769691_fdcbd812fc_o_ymjetd.jpg', name: 'Yabebe' },
  ]
};

export default galleryImages;