import ConfigRecordInfoProcess from './ConfigRecordInfoProcess.ts';
import invert from './invert.ts';

export default function processPerformerOrder(performers: string[], orderRules: ConfigRecordInfoProcess['performerOrder'] = []) {
  if (!orderRules) {
    return performers;
  }

  const order = invert(orderRules);

  return [...performers].sort((performer1, performer2) => {
    // @ts-ignore Element implicitly has an 'any' type
    const order1: string|undefined = order[performer1];

    // @ts-ignore Element implicitly has an 'any' type
    const order2: string|undefined = order[performer2];

    // console.log(order1, typeof(order1))
    // console.log(order2, typeof(order2))

    if (order1 && typeof(order2) == 'undefined') {
      return -1
    }

    if (order2 && typeof(order1) == 'undefined') {
      return 1
    }

    if (typeof(order1) !== 'undefined' && typeof(order2) !== 'undefined') {
      return parseInt(order1, 10) - parseInt(order2, 10);
    }

    return performer1.localeCompare(performer2);
  })


}
