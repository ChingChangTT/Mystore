const ConfirmationDialog = ({ onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Confirm Removal</h2>
          <p className="mb-4">Are you sure you want to remove this product?</p>
          <div className="flex justify-end">
            <button
              className="py-2 px-4 mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationDialog;
  