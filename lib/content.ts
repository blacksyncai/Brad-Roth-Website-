export const themes = [
 {slug:'editorial',number:'01',title:'Editorial Luxury',description:'A considered point of view. Refined serif typography, warm ivory, and the rhythm of a beautiful magazine.',mood:'Quiet · Literary · Composed', image:'/media/villa.jpg'},
 {slug:'architectural',number:'02',title:'Modern Architectural',description:'Space to make a statement. Graphic typography, a disciplined grid, and a cinematic black-and-white palette.',mood:'Bold · Precise · Sculptural',image:'/media/architecture.jpg'},
 {slug:'california',number:'03',title:'California Contemporary',description:'A little more light. Warm natural tones, an easy editorial flow, and a distinctly West Coast sensibility.',mood:'Warm · Airy · Personal',image:'/media/interior.jpg'},
] as const;
export type Theme = typeof themes[number]['slug'];
export const content = {
 name:'Brad Roth', group:'Brad Roth Group', brokerage:'Equity Union',
 introduction:'Real estate is personal. The right conversation is where it begins.',
 about:'Meet Brad Roth, the name behind Brad Roth Group. Affiliated with Equity Union, BRG brings a personal point of view to the conversation about your next home.',
 services:[
  {number:'01',title:'Buying a home',description:'Start with how you want to live. Explore your priorities, your wish list, and the questions that matter before your next move.',topics:['Your priorities','The search','Your next steps']},
  {number:'02',title:'Selling a home',description:'Every home has a story. Begin a conversation about presentation, timing, and a thoughtful approach to bringing yours to market.',topics:['Your home’s story','Presentation','A plan for your move']},
 ],
 communities:[{title:'A place to belong',description:'The streets, the daily rituals, the feeling of coming home.'},{title:'Room for your lifestyle',description:'Consider the spaces and surroundings that make a place yours.'},{title:'A different pace',description:'Explore what matters to you, from everyday connections to space to unwind.'}],
 propertyNote:'Verified properties will appear here once listing details, photography, and permissions are confirmed.',
 communityNote:'Community guides are being curated. Specific service areas will be confirmed with Brad.',
} as const;
