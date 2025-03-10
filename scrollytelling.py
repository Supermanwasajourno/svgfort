import dash
from dash import html, dcc
from dash.dependencies import Input, Output
import plotly.express as px
import numpy as np
import pandas as pd

# Пример текстовых секций для вставки (можно заменить на любой другой текст)
sections = [
    "Раздел 1: Введение. Здесь представлен вступительный текст, описывающий основные аспекты scrollytelling.",
    "Раздел 2: Проблематика. В этом разделе описываются проблемы, которые будут решены.",
    "Раздел 3: Решение. Здесь описывается предлагаемое решение и его реализация.",
    "Раздел 4: Заключение. Подведение итогов и выводы, сделанные в ходе анализа."
]

# Инициализация приложения Dash
app = dash.Dash(__name__)

# Определение макета приложения
app.layout = html.Div([
    html.H1("Scrollytelling на Python с Dash"),
    
    # Слайдер для имитации прокрутки
    dcc.Slider(
        id='scroll-slider',
        min=0,
        max=len(sections)-1,
        step=1,
        value=0,
        marks={i: f"Секция {i+1}" for i in range(len(sections))},
        tooltip={"always_visible": True, "placement": "bottom"}
    ),
    
    # Область для отображения текста секции
    html.Div(id='section-text', style={'marginTop': '50px', 'fontSize': '20px'}),
    
    # График, который меняется в зависимости от текущей секции
    dcc.Graph(id='section-graph')
], style={'width': '80%', 'margin': 'auto'})

# Колбэк для обновления текста и графика при изменении положения слайдера
@app.callback(
    [Output('section-text', 'children'),
     Output('section-graph', 'figure')],
    Input('scroll-slider', 'value')
)
def update_section(value):
    # Выбор текста для текущей секции
    text = sections[value]
    
    # Создание простого графика: количество точек растёт от раздела к разделу
    np.random.seed(42)
    num_points = (value + 1) * 10
    df = pd.DataFrame({
        "x": np.linspace(0, 10, num_points),
        "y": np.random.rand(num_points) + value  # смещение по оси Y для наглядности
    })
    fig = px.scatter(df, x="x", y="y", title=f"График для раздела {value+1}")
    
    return text, fig

if __name__ == '__main__':
    app.run_server(debug=True)
