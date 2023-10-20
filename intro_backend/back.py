from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/back', methods=['GET', 'POST'])

def recibir_formulario():
    if request.method == 'POST':
        #funcion para guardar los datos en la base de datos
        # Obtén los datos del formulario
        nombre = request.form['nombre']
        email = request.form['email']

        # Realiza alguna acción con los datos, como almacenarlos en una base de datos
        # En este ejemplo, simplemente los mostraremos en la página
        return f"Nombre: {nombre}<br>Email: {email}"

    return "No hay datos"
    #return render_template('formulario.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)