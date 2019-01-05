// import { Greeting } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: () => {
      return {
        error: false,
        text: "love you"
      };
    }
  }
};

export default resolvers;
