export const products = [{
  id: "discovery-set",
  name: "Discovery Set",
  description: "Experience our collection of French fine fragrances with our exclusive Discovery Set. Each set contains 2ml samples of our four signature perfumes, allowing you to explore our complete range of sophisticated scents.",
  longDescription: "Our Discovery Set is the perfect introduction to the world of Diur Parfums. Each carefully curated set contains 2ml samples of Red Parfum, Green Parfum, Violet Parfum, and Orange Parfum. This collection showcases our commitment to fine French perfumery, with each fragrance crafted by master perfumers using the finest ingredients from around the world. Experience the perfect balance of traditional French savoir-faire and our unique connection to the Himalayas.",
  variants: [{
    size: "4 x 2ml",
    price: 999,
    sku: "DISCOVERY-SET"
  }],
  image: "https://images.unsplash.com/photo-1592842232655-e5d345cbc2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  additionalImages: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1585650026644-accd85a24037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
  category: "sets",
  isNew: true,
  isBestseller: false,
  notes: {
    concentration: "20-25% pure parfum concentration",
    usage: "Due to the high concentration, first test on less sensitive skin before applying to desired areas.",
    description: "A masterful collection showcasing the breadth of fine perfumery, from luminous florals to opulent orientals."
  }
}, {
  id: "red-parfum",
  name: "Red Parfum",
  description: "A bold and passionate fragrance featuring Damask Rose from Turkey, Patchouli from Indonesia, and precious Frankincense from Oman. This sophisticated blend celebrates the artistry of global perfumery.",
  longDescription: "Red Parfum embodies the essence of luxury perfumery. Opening with vibrant notes of Turkish Damask Rose and Indian Davana, the heart reveals an intricate blend of Indonesian Patchouli and Omani Frankincense. The base notes of Madagascan Vanilla and Australian Sandalwood create a warm, lingering finish that's both sophisticated and timeless. Each ingredient is carefully selected from the world's finest sources and blended by master perfumers in France.",
  variants: [{
    size: "10ml",
    price: 999,
    sku: "RED-10"
  }, {
    size: "50ml",
    price: 2499,
    sku: "RED-50"
  }, {
    size: "100ml",
    price: 4499,
    sku: "RED-100"
  }],
  image: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80",
  additionalImages: ["https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1595425964272-5437c8a31180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
  category: "floral",
  isNew: true,
  isBestseller: true,
  notes: {
    concentration: "23% pure parfum concentration",
    top: "Turkish Damask Rose, Indian Davana, Sicilian Bergamot",
    middle: "Indonesian Patchouli, Omani Frankincense, Bulgarian Rose Absolute",
    base: "Madagascan Vanilla, Australian Sandalwood, Haitian Vetiver",
    character: "Opulent, sensual, deeply romantic",
    remindsOf: "A moonlit garden in full bloom, precious woods, and ancient resins",
    usage: "Due to the high concentration, first test on less sensitive skin before applying to desired areas."
  }
}, {
  id: "green-parfum",
  name: "Green Parfum",
  description: "A fresh and invigorating fragrance featuring Indian Artemisia, French Violet Leaf, and Vietnamese Agarwood. This rejuvenating scent captures the essence of nature's finest ingredients.",
  longDescription: "Green Parfum is our tribute to nature's complexity. This invigorating fragrance opens with crisp notes of French Violet Leaf and Italian Bergamot. The heart reveals Indian Artemisia, sustainably sourced Vietnamese Agarwood, and aromatic French Lavender. The base notes of Indonesian Vetiver and Haitian Vetiver create a lasting impression of sophisticated freshness. Each ingredient is meticulously sourced from its optimal terroir and crafted in France by master perfumers.",
  variants: [{
    size: "10ml",
    price: 999,
    sku: "GREEN-10"
  }, {
    size: "50ml",
    price: 2499,
    sku: "GREEN-50"
  }, {
    size: "100ml",
    price: 4499,
    sku: "GREEN-100"
  }],
  image: "https://images.unsplash.com/photo-1605651531144-51381895e23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  additionalImages: ["https://images.unsplash.com/photo-1616604745302-60a195c6d8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1605651531847-60bcfa7d66e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"],
  category: "woody",
  isNew: true,
  isBestseller: false,
  notes: {
    concentration: "20-25% pure parfum concentration",
    usage: "Due to the high concentration, first test on less sensitive skin before applying to desired areas."
  }
}, {
  id: "violet-parfum",
  name: "Violet Parfum",
  description: "An elegant and mysterious fragrance featuring French Lavender, Italian Iris, and Madagascar Vanilla. This sophisticated scent represents the pinnacle of fine French perfumery.",
  longDescription: "Violet Parfum captures the mysterious allure of twilight. This elegant fragrance begins with delicate notes of French Lavender and Italian Bergamot. Its heart reveals a complex interplay of Italian Iris and Egyptian Jasmine. The base notes of Madagascar Vanilla, New Caledonian Sandalwood, and Laotian Benzoin create a sophisticated, lingering presence. Our master perfumers in France craft each batch to ensure perfect harmony between these precious ingredients.",
  variants: [{
    size: "10ml",
    price: 999,
    sku: "VIOLET-10"
  }, {
    size: "50ml",
    price: 2499,
    sku: "VIOLET-50"
  }, {
    size: "100ml",
    price: 4499,
    sku: "VIOLET-100"
  }],
  image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  additionalImages: ["https://images.unsplash.com/photo-1618330834871-dd22c2c226ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1599342166997-58224885c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
  category: "oriental",
  isNew: false,
  isBestseller: true,
  notes: {
    concentration: "20-25% pure parfum concentration",
    usage: "Due to the high concentration, first test on less sensitive skin before applying to desired areas."
  }
}, {
  id: "orange-parfum",
  name: "Orange Parfum",
  description: "A vibrant and uplifting fragrance featuring Sicilian Blood Orange, Indian Tagetes, and Lebanese Cedarwood. This energizing scent celebrates the vibrancy of citrus combined with precious woods.",
  longDescription: "Orange Parfum is a celebration of light and energy. This vibrant fragrance opens with bright notes of Sicilian Blood Orange and Calabrian Bergamot. The heart features Indian Tagetes, carefully extracted from flowers grown in Himachal Pradesh, blended with Lebanese Cedarwood and Haitian Vetiver. Base notes of Moroccan Ambergris and Indonesian Patchouli provide a warm foundation that evolves beautifully throughout the day. Crafted in France by master perfumers who understand the delicate balance of fine ingredients.",
  variants: [{
    size: "10ml",
    price: 999,
    sku: "ORANGE-10"
  }, {
    size: "50ml",
    price: 2499,
    sku: "ORANGE-50"
  }, {
    size: "100ml",
    price: 4499,
    sku: "ORANGE-100"
  }],
  image: "https://images.unsplash.com/photo-1590239926044-4c5f32e5458f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  additionalImages: ["https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1566977776052-6e61e35bf9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
  category: "citrus",
  isNew: false,
  isBestseller: false,
  notes: {
    concentration: "20-25% pure parfum concentration",
    usage: "Due to the high concentration, first test on less sensitive skin before applying to desired areas."
  }
}];
export const collections = {
  floral: {
    title: "Floral Collection",
    description: "Exquisite bouquets crafted from the world's finest blooms",
    image: "https://images.unsplash.com/photo-1589123053646-4e8b0c844114"
  },
  woody: {
    title: "Woody Collection",
    description: "Majestic compositions centered on precious woods",
    image: "https://images.unsplash.com/photo-1520876652658-7c2a7b4c439c"
  },
  oriental: {
    title: "Oriental Collection",
    description: "Opulent blends of resins, spices, and vanilla",
    image: "https://images.unsplash.com/photo-1583445095369-5cc4a5dbb250"
  },
  citrus: {
    title: "Citrus Collection",
    description: "Vibrant harmonies of sun-kissed citrus and aromatics",
    image: "https://images.unsplash.com/photo-1590239926044-4c5f32e5458f"
  }
};
export const brandStory = {
  founderName: "Nipun Nayar",
  heritage: {
    teaEstate: {
      name: "Bundla Tea Estate",
      location: "Palampur, Himachal Pradesh",
      history: "Established in 1850, Bundla Tea Estate has been a cornerstone of Kangra's tea heritage for over 170 years. The estate is renowned for producing award-winning Kangra Tea, both Black and Green varieties, which have received prestigious recognition in England. The unique microclimate of Palampur, combined with traditional cultivation methods, creates teas of exceptional character and quality.",
      achievements: "Our teas have garnered international acclaim, with multiple awards from England celebrating the distinctive character of authentic Kangra Tea. The estate's commitment to quality and tradition has made it a benchmark for excellence in the Indian tea industry."
    },
    maternalGrandfather: "My maternal grandfather continues the legacy at Bundla Tea Estate in Palampur, Himachal Pradesh, where he not only produces internationally acclaimed Kangra Tea but also pursues his passion for essential oil extraction. His expertise in both tea and essential oils represents a unique confluence of traditional knowledge and modern craftsmanship.",
    paternalHeritage: "In 1974, my paternal grandfather established what would become a cornerstone of the phyto-chemical industry. Under my father's leadership, the company expanded into cedar wood oil production, securing an exclusive agreement with the Government of Himachal Pradesh. Today, we stand as one of the largest manufacturers of Himalayan Cedar wood oil.",
    diurForest: "The name Diur comes from a special forest in the Himalayas that has consistently yielded the highest quality cedar wood oil. Among all the forests we work with, Diur has provided the most exceptional yields, making it the perfect embodiment of our commitment to quality and our connection to the land."
  },
  philosophy: "At Diur Parfums, we combine French perfumery expertise with our unique heritage. Our fragrances are crafted by master perfumers in France, using the finest ingredients sourced globally. From Sicilian citrus to Indonesian patchouli, Vietnamese agarwood to French lavender, each ingredient is chosen for its exceptional quality and contribution to the final composition."
};
export const companyInfo = {
  name: "Diur Parfums",
  email: "info@diurparfums.com",
  phone: "+91-9740553082",
  address: {
    line1: "Diur Parfums",
    line2: "P.O. Box#4, Dhangu Road",
    city: "Pathankot",
    state: "Punjab",
    country: "India",
    pincode: "145001"
  },
  images: {
    forest: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    cedars: "https://images.unsplash.com/photo-1520876652658-7c2a7b4c439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    perfumery: "https://images.unsplash.com/photo-1583445095369-9c651e7c0e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    laboratory: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#"
  }
};