import { useState } from 'react';

import { Button, Modal } from '@/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

interface HabitFormData {
  title: string;
  description: string;
}

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
      <form
        className="flex w-[60vw] flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="title">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            className="rounded-lg border-1 border-gray-300 p-1 focus:border-transparent focus:ring focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            id="description"
            className="min-h-20 rounded-lg border-1 border-gray-300 p-1 focus:border-transparent focus:ring focus:outline-none"
          />
        </div>

        <section className="flex justify-end gap-2">
          <Button
            variant="destructive"
            onClick={() => {
              onClose();
            }}
          >
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
