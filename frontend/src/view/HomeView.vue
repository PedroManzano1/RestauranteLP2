<template>
  <div class="home-container">
    <header class="hero">
      <h1>Bem-vindo ao Avaliador de Restaurantes</h1>
    </header>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f7f6;
}

.hero {
  text-align: center;
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.hero p {
  color: #666;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s;
}

.btn:hover {
  opacity: 0.8;
}

.btn-primary {
  background-color: #4e9e47;
  color: white;
}

.btn-secondary {
  background-color: #2c3e50;
  color: white;
}
</style>