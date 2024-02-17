const blog = [
  {
    id: 1,
    title: "The Health Benefits of Ginger Tea.",
    img: "/img/blog/about-1.jpg",
    des: `Ginger is not just delicious. Gingerol, a natural component of ginger root, benefits gastrointestinal motility ― the rate at which food exits 
    the stomach and continues along the digestive process. Eating ginger encourages efficient digestion, so food doesn’t linger as long in the gut.
    Nausea relief. Encouraging stomach emptying can relieve the discomforts of nausea due to
    Chemotherapy. Experts who work with patients receiving chemo for cancer, say ginger may take the edge off post-treatment nausea, and without some of the side effects of anti-nausea medications.
    `,
    comment: ` 05 Comments`,
    
  },
  {
    id: 2,
    title: "Nourishing Goodness in Every Scoop",
    img: "/img/blog/about-2.jpg",
    des: `Nutritional Supplements: This slogan could be used for a line of nutritional supplements such as protein powders, vitamin supplements, or meal replacement shakes. It conveys the idea that each serving of
     the product provides essential nutrients to nourish the body.Superfoods and Health Foods: For products like chia seeds, quinoa, or organic dried fruits, this slogan emphasizes their nutritional value and the 
     nourishing benefits they offer with each serving.Healthy Snacks: Snack bars, trail mixes, or energy balls could use this slogan to highlight their wholesome ingredients and the nourishing energy they provide for busy lifestyles.
     Pregnancy. For generations, women have praised the power of ginger to ease “morning sickness” and other queasiness associated with pregnancy. Even the American Academy of Obstetrics and Gynecology mentions ginger as an acceptable
      nonpharmaceutical remedy for nausea and vomiting.`,
    comment: ` 03 Comments`,
    
  },
  {
    id: 3,
    title: "Exploring the Diverse Flavors of Ginger Tea Around the World",
    img: "/img/blog/ragi-powder-sm-img.png",
    des: `Embark on a tantalizing journey as we traverse the globe to uncover the diverse and culturally rich world of ginger tea. From the bustling streets of Asia to the cozy cafes of Europe, join us in discovering the unique variations of this beloved beverage that have stood the test of time. Immerse yourself in the aromatic allure of Masala Chai from India, the soothing warmth of Korean Ginger Tea, or the zesty kick of Moroccan Ginger Mint Tea. Each cup tells a story of tradition, flavor, and the universal love for ginger-infused bliss. Come along as we celebrate the global tapestry of ginger tea, where every sip is a passport to the rich tapestry of cultures that have embraced this comforting elixir.`,
    comment: ` 10 Comments`,
    
  },
  {
    id: 4,
    title: "Embracing Ragi Powder in Gluten-Free Delights",
    img: "/img/blog/ragi-powder-big-img.jpg",
    des: ` Break free from the constraints of traditional baking and embark on a gluten-free culinary adventure with the secret weapon in our pantry – Ragi Powder. In this exploration of gluten-free baking, discover how Ragi Powder not only serves as a fantastic alternative but elevates your baked goods to new heights of flavor and nutrition. Unravel the unique qualities of Ragi Powder that make it a star ingredient in gluten-free recipes, from cakes that melt in your mouth to cookies that boast the perfect balance of chewiness and crispiness. Join us as we share delectable and wholesome recipes, proving that with Ragi Powder, gluten-free baking is not just a necessity but a delightful journey into the world of indulgence without compromise.`,
    comment: ` 01 Comments`,
    
  },
  {
    id: 5,
    title: "DIY Ginger Tea Recipes for a Flavorful Journey",
    img: "/img/blog/about-5.png",
    des: `Elevate your tea-drinking experience with a dash of creativity as we guide you through the art of crafting your own ginger tea concoctions at home. Unleash the aromatic wonders of ginger with our curated collection of DIY recipes that go beyond the ordinary. From the classic Honey Lemon Ginger Tea to exotic blends featuring herbs like mint and basil, each recipe is a symphony of flavors designed to tantalize your taste buds. Join us on this flavorful journey as we demonstrate how a simple cup of ginger tea can be transformed into a masterpiece of warmth, health, and indulgence. Get ready to infuse your teatime routine with a burst of creativity and discover the joy of sipping on your very own artisanal ginger tea blends.`,
    comment: ` 04 Comments`,
    
  },
  {
    id: 6,
    title: "Elevate Your Energy with Wholesome Treats",
    img: "/img/blog/about-6.jpg",
    des: `Break away from conventional snacks and embrace the goodness of ragi powder as we unveil a world of health-conscious indulgence. In this guide to guilt-free snacking, discover how the nutritional powerhouse, ragi, can transform your munching habits. From nutrient-packed energy bars that fuel your day to crunchy ragi crackers that satisfy your savory cravings, we present a variety of inventive and delicious snack ideas. Join us on this journey of redefining snacking, where each bite is not just a treat for your taste buds but also a boost for your well-being. Explore the versatility of ragi powder and indulge in snacks that promise both flavor and nourishment, making every break a step towards a healthier you`,
    comment: ` 02 Comments`,
    
  },
  {
    id: 6,
    title: "Elevate Your Energy with Wholesome Treats",
    img: "/img/MicrosoftTeams-image(6).png",
    des: `Break away from conventional snacks and embrace the goodness of ragi powder as we unveil a world of health-conscious indulgence. In this guide to guilt-free snacking, discover how the nutritional powerhouse, ragi, can transform your munching habits. From nutrient-packed energy bars that fuel your day to crunchy ragi crackers that satisfy your savory cravings, we present a variety of inventive and delicious snack ideas. Join us on this journey of redefining snacking, where each bite is not just a treat for your taste buds but also a boost for your well-being. Explore the versatility of ragi powder and indulge in snacks that promise both flavor and nourishment, making every break a step towards a healthier you`,
    comment: ` 02 Comments`,
    
  },
];

let blogDisplay = document.getElementById("blog");

blog.map((data) => {
  return (blogDisplay.innerHTML += `
   <div class="row col-sm-12 col-lg-6 ">
        <div class=" text-center mt-5">
          <img class="img-fluid blogImg" src=${data.img} alt="" />
        </div>
        <h2 >
          ${data.title}
        </h2>
        <p class="">
          ${data.des}
        </p>
        
      </div>
   
   `);
});
