## Proceso para subir cambios a rama propia
---

Una vez guardado todos los cambios:

1. Abrir git bash (consola, para abrir Crtl+ñ)
2. Revisar cambios con:
    `git status`
    Verás archivos en rojo o verdes, son ardhivos o midificados o creados
3. Prearar los archivos para subir a tu rama
    `git add .`
    El punto (.) es como una forma de de dir  -todo- si quieres subir solo unos arhivos debes especidificar cual (ej. `git add notas_GIT.md`)
    En este caso solo se prepararan para subir solo los archivos que tu indiques y NO TODO
4. Agregar algun comentario que ayude a dar información sobre lo que se subio
    `git commit -m "comentario...(que brinde informacion clara "`
    NOTA: Hasta este punto todos tus cambios estan AUN en tu LAP toda via no se sube nada al repositorio
5. Subir cambios a REPO (A la nube)
    `git push`


## Proceso para bajar cambios a rama propia
---

1. Bajar los cambios e integrarlos a tu LAP
     `git pull`
     NOTA: Enrealidad este comando hace dos pasos/comandos:
        `git fetch`
        `git merge`

## Errores comunes
---

1. merge conflict: conflictos cuando hay cambios en mismo archivo por dos o mas miembros del equipo