function BoardSelector() {
  return (
    <div className="self-center mt-10">
      <h3 className="text-2xl font-bold">點選開票地圖，輕鬆掌握得票數據</h3>
      <ul className="mt-6">
        <li>
          <select
            className="p-2 border border-gray-40 rounded-md"
            name=""
            id=""
          >
            <option className="text-gray-40" value="">
              請勾選城市
            </option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default BoardSelector;
