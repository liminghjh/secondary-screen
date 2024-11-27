from flask import Flask, render_template, jsonify
import psutil

app = Flask(__name__)

# 获取CPU和内存的实时信息
def get_system_info():
    cpu_usage = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory()
    memory_usage = memory.percent  # 内存使用百分比
    return {
        "cpu": cpu_usage,
        "memory": memory_usage
    }

# 主页面路由，渲染index.html
@app.route('/')
def index():
    return render_template('index.html')

# 设置API路由
@app.route('/system_info', methods=['GET'])
def system_info():
    data = get_system_info()
    return jsonify(data)

# 启动服务器
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
