import { Rhum } from "../../dev_deps/rhum.ts";
import processPerformerOrder from '../processPerformerOrder.ts';

Rhum.testPlan("default test plan", () => {
  Rhum.testSuite("processPerformerOrder()", () => {
    Rhum.testCase("sorts ", () => {
      Rhum.asserts.assertEquals(
        processPerformerOrder(
          ['ccc', 'bbb', 'eee', 'aaa']
        ),
        ['aaa', 'bbb', 'ccc', 'eee']
      );
    });

    Rhum.testCase("sorts with one custom order", () => {
      Rhum.asserts.assertEquals(
        processPerformerOrder(
          ['aaa', 'bbb', 'ddd'],
          ['ddd']
        ),
        ['ddd', 'aaa', 'bbb']
      );
    });

    Rhum.testCase("sorts with 2 custom order with right initial order", () => {
      Rhum.asserts.assertEquals(
        processPerformerOrder(
          ['aaa', 'ccc', 'bbb', 'ddd'],
          ['ccc', 'bbb']
        ), ['ccc', 'bbb', 'aaa', 'ddd']
      );
    });

    Rhum.testCase("sorts with 2 custom order with wrong initial order", () => {
      Rhum.asserts.assertEquals(
        processPerformerOrder(
          ['aaa', 'bbb', 'ccc', 'ddd'],
          ['ccc', 'bbb']
        ), ['ccc', 'bbb', 'aaa', 'ddd']
      );
    });
  });
});

Rhum.run();
