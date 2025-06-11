import { useState } from 'react';

import { Button } from '@/components';
import { Modal } from '@/components/ui/Modal.tsx';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

interface HabitFormData {
  title: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddFormModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const [formData, setFormData] = useState<HabitFormData>({
    title: '',
    description: '',
  });

  // const [errors, setErrors] = useState({});

  // useEffect(() => {}, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    console.log('>>>>> event:', event);

    setFormData({ ...formData, [name]: value });
  };

  console.log('>>>>> formData:', formData);

  return (
    <Modal isOpen={isOpen} closeModal={onClose} title="Add New Habit">
      <form className="w-[60vw] flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            className="border-1 p-1 border-gray-300 rounded-lg focus:outline-none focus:border-transparent focus:ring"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            id="description"
            className="min-h-20 p-1 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-transparent focus:ring"
          />
        </div>

        <section className="flex gap-2 justify-end">
          <Button variant="destructive" onClick={() => console.log('edit')}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => console.log('del')}>
            Add
          </Button>
        </section>
      </form>
    </Modal>
  );
};

export default AddFormModal;
