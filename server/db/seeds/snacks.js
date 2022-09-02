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
          image: './images/bear-sized-duck-pancakes',
        },
        {
          id: 202,
          name: 'Scrambled Moa Eggs',
          image: './images/scrambled-moa-eggs',
        },
        {
          id: 203,
          name: 'Moa & Chips',
          image: './images/moa-and-chips',
        },
        {
          id: 204,
          name: 'Extinct Banana Cake',
          image: './images/extinct-banana-cake',
        },
        {
          id: 205,
          name: 'Egg chowder',
          image: './images/egg-chowder',
        },
        {
          id: 206,
          name: 'Dodo Soup Surprise',
          image: './images/dodo-soup-surprise',
        },
        {
          id: 207,
          name: 'Shiba Pancakes',
          image: './images/shiba-pancakes',
        },
        {
          id: 208,
          name: 'Recently Extinct Platter',
          image: './images/recently-extinct-platter',
        },
        {
          id: 209,
          name: 'Cosmic Moa Cake',
          image: './images/cosmic-moa-cake',
        },
      ])
    })
}
