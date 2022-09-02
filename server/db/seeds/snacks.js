exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Snacks')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('Snacks').insert([
        {
          id: 201,
          name: 'Bear-Sized Duck Pancakes',
          image: './images/bear-sized-duck-pancakes.jpg',
        },
        {
          id: 202,
          name: 'Scrambled Moa Eggs',
          image: './images/scrambled-moa-eggs.jpg',
        },
        {
          id: 203,
          name: 'Moa & Chips',
          image: './images/moa-and-chips.png',
        },
        {
          id: 204,
          name: 'Extinct Banana Cake',
          image: './images/extinct-banana-cake.jpg',
        },
        {
          id: 205,
          name: 'Egg chowder',
          image: './images/egg-chowder.jpg',
        },
        {
          id: 206,
          name: 'Emu Casserole',
          image: './images/emu-casserole.jpeg',
        },
        {
          id: 207,
          name: 'Shiba Pancakes',
          image: './images/shiba-pancakes.jpg',
        },
        {
          id: 208,
          name: 'Recently Extinct Platter',
          image: './images/recently-extinct-platter.jpg',
        },
        {
          id: 209,
          name: 'Cosmic Moa Cake',
          image: './images/cosmic-moa-cake.png',
        },
      ])
    })
}
