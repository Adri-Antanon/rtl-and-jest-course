import { useState } from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to the <span>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button type="submit" variant="primary" disabled={!isChecked}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
