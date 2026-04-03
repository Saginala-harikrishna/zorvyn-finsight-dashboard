const prompts = [
  "Food expenses",
  "Highest spending",
  "Savings suggestion",
];

const PromptChips = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="px-4 py-2 bg-white rounded-xl shadow"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptChips;