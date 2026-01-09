import microsoft from "../../assets/CertificationImages/microsoft.png";
import linkedin from "../../assets/CertificationImages/linkedin.jpg"
import hackerRank from "../../assets/CertificationImages/HackerRank.png"
import Udemy from "../../assets/CertificationImages/udemy.png"

export const CERTIFICATIONS = [
  {
    provider: "microsoft",
    items: [
      {
        title: "Describe the benefits of using cloud services",
        logo: microsoft,
        url: "https://learn.microsoft.com/en-us/users/aasifsaneeth-5418/achievements/7knkfvbz",
      },
      {
        title: "Describe cloud service types",
        logo: microsoft,
        url: "https://learn.microsoft.com/en-us/users/aasifsaneeth-5418/achievements/w269plsn",
      },
      {
        title: "Describe cloud computing",
        logo: microsoft,
        url: "https://learn.microsoft.com/en-us/users/aasifsaneeth-5418/achievements/xqu8kdcy",
      },
    ]
  },
  {
     provider: "HackerRank",
     items: [
      {
         title: "React(Basic)",
          logo: hackerRank,
          url:"https://www.hackerrank.com/certificates/iframe/5dd4a8b6f3e4"
      },
       {
         title: "SQL(Basic)",
          logo: hackerRank,
          url:"https://www.hackerrank.com/certificates/iframe/246cde45b342"
      },
         {
         title: "SQL(InterMediate)",
          logo: hackerRank,
          url:"https://www.hackerrank.com/certificates/iframe/246cde45b342"
      }
     ]
  },

  {
    provider: "linkedin",
    items: [
      {
        title: "Microservices Foundations",
        logo: linkedin,
        url: "https://www.linkedin.com/learning/certificates/ea28460ccafd643f2796307c6ec95486e36dd5d6333a49970fa47373cbffcbc3?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH%2BY1WLbtTTK3ea%2F9BZ6aBw%3D%3D",
      },
      {
        title: "Building RESTful APIs with Node.js and Express",
        logo: linkedin,
        url: "https://www.linkedin.com/learning/certificates/2379ae5ababe3492eeaea523a1940746ad29ad4e5a87c63b7713e60d3a2570c6?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH%2BY1WLbtTTK3ea%2F9BZ6aBw%3D%3D",
      },
       {
        title: "Learning Docker",
        logo: linkedin,
        url: "https://www.linkedin.com/learning/certificates/234d45350d5834b253ca23cccdc87aee21e190b5084af1a1c6c982db52859abf?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH%2BY1WLbtTTK3ea%2F9BZ6aBw%3D%3D",
      },
      {
        title: "Node.js Essential Training",
        logo: linkedin,
        url:"https://www.linkedin.com/learning/certificates/f65874558c9a0708c985e81a4068f72aa205b7f2d9c8346920381e9584432375?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH%2BY1WLbtTTK3ea%2F9BZ6aBw%3D%3D"

      }
      // Add more LinkedIn certificates here
    ]
  },
    {
      provider: "Udemy",
      items:[
        {
          title: "Ultimate Guide to .Net (8) Core Web API with EF Core",
          logo:Udemy,
          url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5209f443-a477-4a51-9632-6456207297d3.pdf"
        }
      ]
  },
];