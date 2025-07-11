import { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Tech Giants Report Record Q4 Earnings Despite Market Uncertainty',
    excerpt: 'Major technology companies continue to show resilience with strong quarterly results, outperforming analyst expectations across the board.',
    content: `
      <p>In an unprecedented display of financial strength, major technology companies have reported record-breaking fourth-quarter earnings that have exceeded even the most optimistic analyst projections. Despite ongoing market volatility and economic uncertainty, these tech giants continue to demonstrate remarkable resilience and adaptability.</p>
      
      <p>The standout performers include several household names that have become integral to our daily lives. Their innovative approaches to artificial intelligence, cloud computing, and digital transformation have not only sustained their business models but propelled them to new heights of profitability.</p>
      
      <p>Industry experts attribute this success to strategic investments in emerging technologies and the companies' ability to pivot quickly in response to changing market conditions. The robust earnings reports have instilled confidence in investors and suggest a positive outlook for the technology sector heading into the new fiscal year.</p>
      
      <p>"What we're seeing is a fundamental shift in how these companies operate," says Maria Rodriguez, senior technology analyst at Global Investment Partners. "They've moved beyond traditional revenue streams and are capitalizing on the digital transformation that has accelerated across all industries."</p>
      
      <p>The impressive financial results have also led to increased research and development budgets, promising even more innovation in the coming quarters. As these companies continue to invest in cutting-edge technologies, their position as market leaders appears more secure than ever.</p>
    `,
    author: 'Saurav Maharjan',
    category: 'Business',
    publishedAt: '2025-01-15',
    readTime: 5,
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    trending: true,
    tags: ['Technology', 'Earnings', 'Business']
  },
  {
    id: '2',
    title: 'Sustainable Fashion: The Rise of Eco-Conscious Designers',
    excerpt: 'A new generation of fashion designers is revolutionizing the industry with sustainable practices and environmentally friendly materials.',
    content: `
      <p>The fashion industry is experiencing a revolutionary transformation as a new wave of eco-conscious designers challenges traditional manufacturing practices and introduces sustainable alternatives that don't compromise on style or quality.</p>
      
      <p>This movement goes far beyond simple recycling or using organic materials. Today's sustainable fashion pioneers are reimagining every aspect of the design and production process, from sourcing raw materials to packaging and distribution.</p>
      
      <p>Leading brands are now incorporating innovative materials such as lab-grown leather, fabric made from recycled ocean plastic, and textiles derived from agricultural waste. These breakthrough materials offer the same durability and aesthetic appeal as their conventional counterparts while significantly reducing environmental impact.</p>
      
      <p>The consumer response has been overwhelmingly positive, with surveys showing that over 70% of millennials and Gen Z shoppers are willing to pay premium prices for sustainable fashion items. This shift in consumer behavior is driving major retailers to reconsider their supply chains and manufacturing processes.</p>
      
      <p>Industry veteran and sustainability advocate James Morrison notes, "We're not just changing how clothes are made; we're changing how people think about fashion consumption. The goal is to create pieces that last longer, look better, and leave a smaller footprint on our planet."</p>
    `,
    author: 'Rupak Pudasaini',
    category: 'Lifestyle',
    publishedAt: '2025-01-14',
    readTime: 4,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    trending: false,
    tags: ['Fashion', 'Sustainability', 'Environment']
  },
  {
    id: '3',
    title: 'Championship Victory Sparks City-Wide Celebration',
    excerpt: 'Local team\'s historic championship win brings together the community in unprecedented celebration.',
    content: `
      <p>The city erupted in celebration last night as the hometown team secured their first championship title in over two decades, marking a historic moment that has united the entire community in joy and pride.</p>
      
      <p>Streets filled with cheering fans, honking cars, and impromptu street parties as news of the victory spread throughout the metropolitan area. The team's remarkable journey from underdogs to champions has captured the hearts of supporters both young and old.</p>
      
      <p>The championship game itself was a masterclass in athletic excellence, with both teams displaying extraordinary skill and determination. The final score of 28-21 doesn't fully capture the intensity and drama that unfolded over four quarters of exceptional play.</p>
      
      <p>Team captain Michael Thompson, visibly emotional during the post-game interview, dedicated the victory to the loyal fanbase: "This is for everyone who believed in us when no one else did. This city deserves this championship, and we're honored to deliver it."</p>
      
      <p>City officials have announced plans for a victory parade next Tuesday, expected to draw hundreds of thousands of participants. Local businesses are already preparing special promotions and events to commemorate this historic achievement that will be remembered for generations to come.</p>
    `,
    author: 'Nikita Ghimire',
    category: 'Sports',
    publishedAt: '2025-01-13',
    readTime: 3,
    image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    trending: true,
    tags: ['Sports', 'Championship', 'Community']
  },
  {
    id: '4',
    title: 'Revolutionary Education Technology Transforms Learning',
    excerpt: 'New AI-powered educational platforms are personalizing learning experiences and improving student outcomes across the globe.',
    content: `
      <p>Educational institutions worldwide are embracing cutting-edge artificial intelligence technology that promises to revolutionize how students learn and teachers instruct, creating personalized educational experiences that adapt to individual learning styles and pace.</p>
      
      <p>These innovative platforms use sophisticated algorithms to analyze student performance, identify knowledge gaps, and provide customized learning paths that maximize retention and understanding. Early results from pilot programs show remarkable improvements in both student engagement and academic achievement.</p>
      
      <p>The technology goes beyond simple content delivery, incorporating interactive elements, real-time feedback, and adaptive assessments that evolve based on student progress. This approach ensures that no student is left behind while allowing advanced learners to accelerate at their own pace.</p>
      
      <p>Dr. Emily Chang, director of educational innovation at Metropolitan University, explains the impact: "We're seeing students who previously struggled with traditional teaching methods now excelling because the AI can identify exactly how they learn best and adjust accordingly."</p>
      
      <p>The implementation of these systems has also provided teachers with valuable insights into student performance, enabling them to focus their attention where it's needed most and create more effective lesson plans based on data-driven observations.</p>
    `,
    author: 'John Doe',
    category: 'Education',
    publishedAt: '2025-01-12',
    readTime: 4,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    trending: false,
    tags: ['Education', 'AI', 'Technology']
  },
  {
    id: '5',
    title: 'Political Tensions Rise Over Infrastructure Bill',
    excerpt: 'Congressional debates intensify as lawmakers struggle to reach consensus on the proposed $2 trillion infrastructure package.',
    content: `
      <p>Capitol Hill remains in a state of intense negotiation as congressional leaders from both parties work to bridge significant differences over the proposed infrastructure legislation that could reshape America's transportation, energy, and communication systems for decades to come.</p>
      
      <p>The comprehensive $2 trillion package addresses critical needs including highway repairs, broadband expansion, clean energy initiatives, and modernizing public transportation systems. However, disagreements over funding mechanisms and project priorities have created a complex political landscape.</p>
      
      <p>Supporters argue that the investment is essential for maintaining America's competitive edge in the global economy and addressing long-neglected infrastructure challenges that affect millions of citizens daily. They point to studies showing that every dollar invested in infrastructure generates significant economic returns.</p>
      
      <p>Opposition voices raise concerns about the package's size and scope, questioning whether all proposed expenditures truly qualify as infrastructure and expressing worry about the long-term fiscal implications of such substantial government spending.</p>
      
      <p>Senate Majority Leader Patricia Anderson remains optimistic about reaching a bipartisan agreement: "Despite our differences, everyone recognizes that our infrastructure needs attention. We're committed to finding common ground that serves the American people."</p>
    `,
    author: 'Rupak Pudasaini',
    category: 'Political',
    publishedAt: '2025-01-11',
    readTime: 5,
    image: 'https://images.pexels.com/photos/2027062/pexels-photo-2027062.jpeg?_gl=1*zxh0tq*_ga*MTUyMjMwNDU3MC4xNzUyMjIzMjYx*_ga_8JE65Q40S6*czE3NTIyMjMyNjAkbzEkZzEkdDE3NTIyMjMzMTgkajIkbDAkaDA.',
    featured: true,
    trending: true,
    tags: ['Politics', 'Infrastructure', 'Congress']
  },
  {
    id: '6',
    title: 'Wellness Tourism: The New Travel Revolution',
    excerpt: 'Health-focused travel experiences are becoming the fastest-growing segment in the tourism industry.',
    content: `
      <p>The travel industry is witnessing an unprecedented shift toward wellness-focused experiences as travelers increasingly prioritize mental and physical health benefits alongside traditional sightseeing and relaxation.</p>
      
      <p>This emerging trend encompasses everything from meditation retreats in remote mountain locations to luxury spa resorts offering comprehensive health assessments and personalized wellness programs. The demand for these experiences has grown by over 200% in the past three years.</p>
      
      <p>Wellness tourism destinations are responding by creating immersive programs that combine local culture with health-focused activities. Visitors can participate in yoga sessions at sunrise, learn traditional cooking techniques using locally sourced organic ingredients, or engage in digital detox programs that encourage mindful living.</p>
      
      <p>Travel industry analyst Jennifer Park notes, "Modern travelers, especially millennials and Gen X, are viewing vacations as opportunities for personal transformation rather than mere escape from routine. They want to return home feeling renewed and equipped with healthy habits they can maintain."</p>
      
      <p>The economic impact has been substantial, with wellness tourism now representing a multi-billion dollar market segment that shows no signs of slowing down as more destinations develop specialized offerings to meet this growing demand.</p>
    `,
    author: 'Saurav Maharjan',
    category: 'Lifestyle',
    publishedAt: '2025-01-10',
    readTime: 4,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    trending: false,
    tags: ['Travel', 'Wellness', 'Tourism']
  }
];

export const breakingNews = [
  'Breaking: Major tech acquisition announced, valued at $45 billion',
  'Markets surge following positive economic indicators',
  'International climate summit reaches historic agreement',
  'Championship finals set record viewership numbers',
  'New medical breakthrough offers hope for rare disease treatment'
];