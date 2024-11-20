// 获取天气信息并更新页面
async function getWeather() {
    const weatherApiKey = "YOUR_API_KEY"; // 替换为你自己的API Key
    const city = "Shanghai"; // 替换为你要查询的城市
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric&lang=zh_cn`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDiv = document.getElementById("weather-info");
            weatherDiv.innerHTML = `
                <p>城市: ${data.name}</p>
                <p>天气: ${data.weather[0].description}</p>
                <p>温度: ${data.main.temp}°C</p>
                <p>湿度: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById(
                "weather-info"
            ).innerHTML = `<p>无法获取天气信息</p>`;
        }
    } catch (error) {
        console.error("获取天气信息失败", error);
        document.getElementById(
            "weather-info"
        ).innerHTML = `<p>加载天气信息失败</p>`;
    }
}

// 初始化天气信息
getWeather();

// 添加待办事项
function addTodo() {
    const todoInput = document.getElementById("new-todo");
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        const todoList = document.getElementById("todo-list");
        const li = document.createElement("li");
        li.textContent = newTodo;
        todoList.appendChild(li);
        todoInput.value = ""; // 清空输入框
    }
}
