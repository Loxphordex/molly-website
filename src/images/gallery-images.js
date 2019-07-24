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
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859645/Molly%20Art/45837340504_14b565cee1_o_juejr8.jpg', name: 'Scruffs' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859597/Molly%20Art/34172729492_3d06f4768f_o_gsnxtg.jpg', name: 'Sad' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859576/Molly%20Art/33984682700_6c339bba66_o_vvil9h.jpg', name: 'Jus Sleepin' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859452/Molly%20Art/29661540622_f12673c916_o_y4d32k.jpg', name: 'Peng Dream' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859477/Molly%20Art/29736984981_39f5f80031_o_ilh59x.jpg', name: 'Paper Affair' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28398311405_44befe467b_o_yyns21.jpg', name: 'Micro Purps' },
  ],

  sculpture: [
    // page 1
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28397966725_a4fb06d3a5_o_esulay.jpg', name: 'Usula' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859639/Molly%20Art/44253714295_8b9508d795_o_syfn17.jpg', name: 'pleasure in small things' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859576/Molly%20Art/33654014988_a8d8141509_o_qjs2ch.jpg', name: 'tuft' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859570/Molly%20Art/33654014178_448828a846_o_za76xj.jpg', name: 'another tuft' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859527/Molly%20Art/32588275247_7f7cde74f3_o_b1if6y.jpg', name: 'tuft3' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28364444706_56b7972c88_o_zmlbko.jpg', name: 'sad frog' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28398395945_07b15f018f_o_oqjed5.jpg', name: 'Pillow' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28364740676_a61a1a8f88_o_ndndxq.jpg', name: 'Beetle' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28292983892_84cab416de_o_zxivv3.jpg', name: 'celry' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28292489212_1f2aa52b5f_o_fxmwvy.jpg', name: 'bod' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28115378510_bae968a87d_o_aexz9u.jpg', name: 'Big Pods' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/27781409523_05d8d358bb_o_qzxpr7.jpg', name: 'Green Pod' },

    // page 2
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28115131280_9282f60c63_o_dmybqu.jpg', name: 'Merma' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28115130610_401a066083_o_ganqud.jpg', name: 'Sloog' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/27782413833_d7c8bc7572_o_j7rcrd.jpg', name: 'Camera' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/28114670060_5d4594d3db_o_ak5an9.jpg', name: 'Blood Cells' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859393/Molly%20Art/27781565993_6168634cfd_o_bpy9rr.jpg', name: 'Long Tomato' },
  ],

  digital: [
    // page 1
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859691/Molly%20Art/underthedome_ikye2v.jpg', name: 'Under the Dome' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859962/Molly%20Art/29726407922_a30593e080_o_h2peck.jpg', name: 'blues' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859679/Molly%20Art/mazeisland1000_eksmhf.jpg', name: 'Maze Island' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859620/Molly%20Art/36604993801_86f7ef062e_o_wkaenk.jpg', name: 'Unfulfilled' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859618/Molly%20Art/38540277612_4e69f9024c_o_gs5ubl.jpg', name: 'Sync' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859608/Molly%20Art/34774441964_67a5b9d593_o_nzguaw.jpg', name: 'Cloge' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859601/Molly%20Art/42330993120_1a7658ee11_o_1_i6zpxf.jpg', name: 'SRT' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859587/Molly%20Art/31718711010_a42602eccc_o_oezfqp.jpg', name: 'The Avo' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859560/Molly%20Art/31975984531_d707bf6ef9_o_wbphmb.jpg', name: 'The Slug Beyond' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859555/Molly%20Art/31718708090_2c20d49152_o_uzmee9.jpg', name: 'Lorange' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859510/Molly%20Art/29839533575_32a96f5dd0_o_a58eeb.jpg', name: 'Green Frites' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859504/Molly%20Art/31283468553_9c2b1d32bf_o_nnrfhr.jpg', name: 'Spurm' },

    // page 2
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859503/Molly%20Art/29726409222_54f46f47bd_o_j8s0hc.jpg', name: 'Orchid' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859501/Molly%20Art/31283469343_3be83ca0a1_o_xlmqpb.jpg', name: 'blue blue' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859488/Molly%20Art/29726405722_11c764843f_o_vkipqe.jpg', name: 'Embryonic' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859451/Molly%20Art/24699904278_629fa97a0b_o_hzrozj.jpg', name: 'Comic' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859395/Molly%20Art/28839018127_047c717f0d_o_jdly44.jpg', name: 'Color Page 1' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859394/Molly%20Art/28839017487_6aa9a5f25f_o_illmvd.jpg', name: 'Color Page 2' },
  ],

  fashion: [
    // page 1
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859495/Molly%20Art/29746557945_e3d6314ff0_o_iievu0.jpg', name: 'hi' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859420/Molly%20Art/29711285606_917ce2c9b0_o_ujqpd5.jpg', name: 'green' },
  ],

  'alt. mediums': [
    // page 1
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859606/Molly%20Art/43775503831_9436148721_o_v6qv0k.jpg', name: 'rocks 1' },
    { url: 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1561859605/Molly%20Art/43059167424_2d813f8d0b_o_ckmaul.jpg', name: 'rocks 2' },
  ]
};

export default galleryImages;