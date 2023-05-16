<template>
    <div class="content">
        <h1 style="padding-top: 25px; font-family: 'Arial'; font-size: 50px; text-align: center;">Welcome</h1>
        <h4 style="text-align: center; color: #adadad; font-family: 'Arial';">Let's get started</h4>
        
        <slot />
    </div>
</template>

<style>

.content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 100%;
    background-color: #333333;
    border-radius: 25px;
    width: 50%;
    height: 50vh;
    filter: drop-shadow(0 0 0.75rem rgb(255, 0, 0));
}
</style>