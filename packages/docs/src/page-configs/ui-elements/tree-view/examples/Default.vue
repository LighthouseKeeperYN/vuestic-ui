<template>
  <p>List of video game genres:</p>
  <va-tree-view :nodes="nodes" />
</template>

<script>
export default {
  name: 'Default',

  data: () => ({
    nodes: [
      {
        id: 1,
        label: 'Action',
        icon: 'healing',
        children: [
          { id: 2, label: 'Platform games' },
          { id: 3, label: 'Shooter games' },
          { id: 4, label: 'Fighting games' },
        ],
      },
      {
        id: 5,
        label: 'Adventure',
        icon: 'interests',
        children: [
          { id: 6, label: 'Text adventures' },
          { id: 7, label: 'Graphic adventures' },
          { id: 8, label: 'Visual novels' },
        ],
      },
      {
        id: 9,
        label: 'Puzzle',
        icon: 'extension',
        children: [
          { id: 10, label: 'Breakout clone game' },
          {
            id: 11,
            label: 'Logical game',
            children: [
              { id: 12, label: 'Physics game' },
            ],
          },
        ],
      },
      {
        id: 13,
        label: 'Strategy',
        icon: 'fort',
        children: [
          { id: 14, label: 'Real-time strategy (RTS)' },
          { id: 15, label: 'Real-time tactics (RTT)' },
          { id: 16, label: 'Tower defense' },
          { id: 17, label: 'Turn-based strategy (TBS)' },
          { id: 18, label: 'Turn-based tactics (TBT)' },
        ],
      },
      {
        id: 19,
        label: 'Sports',
        icon: 'pool',
        children: [
          { id: 20, label: 'Racing' },
          { id: 21, label: 'Sports game' },
          { id: 22, label: 'Competitive' },
          { id: 23, label: 'Sports-based fighting' },
        ],
      },
      { id: 24, label: 'Simulation', icon: 'motorcycle' },
      { id: 25, label: 'MMO', icon: 'groups' },
    ],
  }),
}
</script>

<style scoped>

</style>
