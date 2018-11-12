const { forwardTo } = require("prisma-binding");

const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  },

  async deleteItem(parent, args, ctx, info) {
    // console.log(args);
    const where = { id: args.id };
    const item = await ctx.db.mutation.deleteItem({ where }, info);
    return item;
  },

  async updateItem(parent, args, ctx, info) {
    console.log(args);
    //1 Find the item
    // const where = { id: args.id };
    // const item = await ctx.db.query.item({ where }, `{ id title}`);
    const updates = { ...args };
    delete updates.id;
    console.log(updates);
    return await ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  }
};

module.exports = Mutations;
