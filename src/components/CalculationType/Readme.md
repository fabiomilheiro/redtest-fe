Creates a field so that the user may choose among all available calculation types.

The calculation types are fed from `calculationTypes` service.

```jsx
import { Form } from "react-final-form";

<Form
  onSubmit={(values) => {}}
  validate={() => {}}
  render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <CalculationType
        name="calculationType"
        validators={[
          () => {
            // some validator
          },
        ]}
      />
    </form>
  )}
/>;
```
