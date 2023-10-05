'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Thoughts', [
      {
        "writtenBy": "Albert Einstein",
        "thought": "Imagination is more important than knowledge.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mark Twain",
        "thought": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Steve Jobs",
        "thought": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "Do one thing every day that scares you.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "All the world's a stage, and all the men and women merely players.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oscar Wilde",
        "thought": "To live is the rarest thing in the world. Most people exist, that is all.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The only thing worse than being blind is having sight but no vision.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mahatma Gandhi",
        "thought": "You must be the change you wish to see in the world.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Buddha",
        "thought": "The mind is everything. What you think you become.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Nelson Mandela",
        "thought": "Education is the most powerful weapon which you can use to change the world.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Jane Austen",
        "thought": "Friendship is certainly the finest balm for the pangs of disappointed love.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Walt Disney",
        "thought": "All our dreams can come true if we have the courage to pursue them.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John F. Kennedy",
        "thought": "Ask not what your country can do for you; ask what you can do for your country.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Emily Dickinson",
        "thought": "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Camus",
        "thought": "In the depth of winter, I finally learned that there was in me an invincible summer.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Aristotle",
        "thought": "Happiness depends upon ourselves.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rosa Parks",
        "thought": "I have learned over the years that when one's mind is made up, this diminishes fear.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Leo Tolstoy",
        "thought": "All happy families are alike; each unhappy family is unhappy in its own way.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rumi",
        "thought": "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Harriet Tubman",
        "thought": "I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Schweitzer",
        "thought": "The purpose of human life is to serve, and to show compassion and the will to help others.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mae Jemison",
        "thought": "Never be limited by other people's limited imaginations.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Ralph Waldo Emerson",
        "thought": "The only way to do great work is to love what you do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "George Bernard Shaw",
        "thought": "Life isn't about finding yourself. It's about creating yourself.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Heraclitus",
        "thought": "Change is the only constant in life.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Coco Chanel",
        "thought": "The most courageous act is still to think for yourself. Aloud.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Bruce Lee",
        "thought": "Absorb what is useful, discard what is not, add what is uniquely your own.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Malala Yousafzai",
        "thought": "We realize the importance of our voices only when we are silenced.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "The future belongs to those who believe in the beauty of their dreams.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Dalai Lama",
        "thought": "Happiness is not something ready made. It comes from your own actions.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John Lennon",
        "thought": "Life is what happens when you're busy making other plans.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oprah Winfrey",
        "thought": "The biggest adventure you can take is to live the life of your dreams.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Aristotle",
        "thought": "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Vincent van Gogh",
        "thought": "I dream of painting and then I paint my dream.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Frida Kahlo",
        "thought": "I paint self-portraits because I am so often alone, because I am the person I know best.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "George Orwell",
        "thought": "In a time of deceit telling the truth is a revolutionary act.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Anne Frank",
        "thought": "I still believe, in spite of everything, that people are truly good at heart.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Stephen Hawking",
        "thought": "However difficult life may seem, there is always something you can do and succeed at.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "J.K. Rowling",
        "thought": "It is our choices that show what we truly are, far more than our abilities.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Winston Churchill",
        "thought": "Success consists of going from failure to failure without loss of enthusiasm.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Leonardo da Vinci",
        "thought": "Simplicity is the ultimate sophistication.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "The time is always right to do what is right.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Einstein",
        "thought": "The only source of knowledge is experience.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "Love all, trust a few, do wrong to none.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Socrates",
        "thought": "An unexamined life is not worth living.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rosa Parks",
        "thought": "To bring about change, you must not be afraid to take the first step.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "J.R.R. Tolkien",
        "thought": "Not all those who wander are lost.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "No one can make you feel inferior without your consent.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Confucius",
        "thought": "Our greatest glory is not in never falling, but in rising every time we fall.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Ralph Waldo Emerson",
        "thought": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Leonardo da Vinci",
        "thought": "Learning never exhausts the mind.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Einstein",
        "thought": "Logic will get you from A to B. Imagination will take you everywhere.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Charles Darwin",
        "thought": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Vincent van Gogh",
        "thought": "Great things are done by a series of small things brought together.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Walt Disney",
        "thought": "The way to get started is to quit talking and begin doing.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Heraclitus",
        "thought": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "You must do the thing you think you cannot do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rumi",
        "thought": "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Stephen Hawking",
        "thought": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John Lennon",
        "thought": "Count your age by friends, not years. Count your life by smiles, not tears.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Socrates",
        "thought": "The only true wisdom is in knowing you know nothing.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "You can't use up creativity. The more you use, the more you have.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Malcolm X",
        "thought": "If you don't stand for something, you will fall for anything.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Coco Chanel",
        "thought": "The most courageous act is still to think for yourself. Aloud.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Lao Tzu",
        "thought": "The journey of a thousand miles begins with one step.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John F. Kennedy",
        "thought": "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Audrey Hepburn",
        "thought": "Nothing is impossible, the word itself says 'I'm possible'!",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Nelson Mandela",
        "thought": "It always seems impossible until it's done.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The only thing worse than being blind is having sight but no vision.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Abraham Lincoln",
        "thought": "Folks are usually about as happy as they make their minds up to be.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oscar Wilde",
        "thought": "To live is the rarest thing in the world. Most people exist, that is all.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "This above all: to thine own self be true.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mother Teresa",
        "thought": "Not all of us can do great things. But we can do small things with great love.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Einstein",
        "thought": "Imagination is more important than knowledge.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Anne Frank",
        "thought": "Think of all the beauty still left around you and be happy.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Nelson Mandela",
        "thought": "Education is the most powerful weapon which you can use to change the world.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mark Twain",
        "thought": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Steve Jobs",
        "thought": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "Do one thing every day that scares you.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "All the world's a stage, and all the men and women merely players.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oscar Wilde",
        "thought": "To live is the rarest thing in the world. Most people exist, that is all.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The only thing worse than being blind is having sight but no vision.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mahatma Gandhi",
        "thought": "You must be the change you wish to see in the world.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Buddha",
        "thought": "The mind is everything. What you think you become.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rumi",
        "thought": "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Harriet Tubman",
        "thought": "I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Schweitzer",
        "thought": "The purpose of human life is to serve, and to show compassion and the will to help others.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mae Jemison",
        "thought": "Never be limited by other people's limited imaginations.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Ralph Waldo Emerson",
        "thought": "The only way to do great work is to love what you do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "George Bernard Shaw",
        "thought": "Life isn't about finding yourself. It's about creating yourself.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Heraclitus",
        "thought": "Change is the only constant in life.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Coco Chanel",
        "thought": "The most courageous act is still to think for yourself. Aloud.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Bruce Lee",
        "thought": "Absorb what is useful, discard what is not, add what is uniquely your own.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Malala Yousafzai",
        "thought": "We realize the importance of our voices only when we are silenced.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "The future belongs to those who believe in the beauty of their dreams.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Dalai Lama",
        "thought": "Happiness is not something ready made. It comes from your own actions.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John Lennon",
        "thought": "Life is what happens when you're busy making other plans.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oprah Winfrey",
        "thought": "The biggest adventure you can take is to live the life of your dreams.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Aristotle",
        "thought": "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Vincent van Gogh",
        "thought": "I dream of painting and then I paint my dream.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Frida Kahlo",
        "thought": "I paint self-portraits because I am so often alone, because I am the person I know best.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "George Orwell",
        "thought": "In a time of deceit telling the truth is a revolutionary act.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Anne Frank",
        "thought": "I still believe, in spite of everything, that people are truly good at heart.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Stephen Hawking",
        "thought": "However difficult life may seem, there is always something you can do and succeed at.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "J.K. Rowling",
        "thought": "It is our choices that show what we truly are, far more than our abilities.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Winston Churchill",
        "thought": "Success consists of going from failure to failure without loss of enthusiasm.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Leonardo da Vinci",
        "thought": "Simplicity is the ultimate sophistication.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "The time is always right to do what is right.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Einstein",
        "thought": "The only source of knowledge is experience.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "Love all, trust a few, do wrong to none.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Socrates",
        "thought": "An unexamined life is not worth living.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rosa Parks",
        "thought": "To bring about change, you must not be afraid to take the first step.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "J.R.R. Tolkien",
        "thought": "Not all those who wander are lost.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "No one can make you feel inferior without your consent.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Confucius",
        "thought": "Our greatest glory is not in never falling, but in rising every time we fall.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Ralph Waldo Emerson",
        "thought": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Leonardo da Vinci",
        "thought": "Learning never exhausts the mind.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Einstein",
        "thought": "Logic will get you from A to B. Imagination will take you everywhere.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Charles Darwin",
        "thought": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Vincent van Gogh",
        "thought": "Great things are done by a series of small things brought together.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Walt Disney",
        "thought": "The way to get started is to quit talking and begin doing.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Heraclitus",
        "thought": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "You must do the thing you think you cannot do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rumi",
        "thought": "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Stephen Hawking",
        "thought": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John Lennon",
        "thought": "Count your age by friends, not years. Count your life by smiles, not tears.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Socrates",
        "thought": "The only true wisdom is in knowing you know nothing.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "You can't use up creativity. The more you use, the more you have.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Malcolm X",
        "thought": "If you don't stand for something, you will fall for anything.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Coco Chanel",
        "thought": "The most courageous act is still to think for yourself. Aloud.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Lao Tzu",
        "thought": "The journey of a thousand miles begins with one step.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "John F. Kennedy",
        "thought": "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Audrey Hepburn",
        "thought": "Nothing is impossible, the word itself says 'I'm possible'!",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Nelson Mandela",
        "thought": "It always seems impossible until it's done.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The only thing worse than being blind is having sight but no vision.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Abraham Lincoln",
        "thought": "Folks are usually about as happy as they make their minds up to be.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oscar Wilde",
        "thought": "To live is the rarest thing in the world. Most people exist, that is all.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "This above all: to thine own self be true.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mother Teresa",
        "thought": "Not all of us can do great things. But we can do small things with great love.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Albert Einstein",
        "thought": "Imagination is more important than knowledge.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Anne Frank",
        "thought": "Think of all the beauty still left around you and be happy.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Nelson Mandela",
        "thought": "Education is the most powerful weapon which you can use to change the world.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Maya Angelou",
        "thought": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mark Twain",
        "thought": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Martin Luther King Jr.",
        "thought": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Steve Jobs",
        "thought": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Eleanor Roosevelt",
        "thought": "Do one thing every day that scares you.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "William Shakespeare",
        "thought": "All the world's a stage, and all the men and women merely players.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Oscar Wilde",
        "thought": "To live is the rarest thing in the world. Most people exist, that is all.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Helen Keller",
        "thought": "The only thing worse than being blind is having sight but no vision.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Mahatma Gandhi",
        "thought": "You must be the change you wish to see in the world.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Buddha",
        "thought": "The mind is everything. What you think you become.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "writtenBy": "Rumi",
        "thought": "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {})

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
