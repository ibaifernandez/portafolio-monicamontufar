# Manual de Despliegue Inteligente (Netlify)

Este proyecto utiliza una lógica de **Continuous Deployment (CD)** optimizada para ahorrar minutos de compilación en Netlify, evitando que cada commit dispare un build innecesario.

## 🛠️ Funcionamiento Técnico

En el archivo `netlify.toml`, hemos configurado el comando `ignore`:

```toml
[build]
  ignore = "git log -1 --pretty=%B | grep -qv '\\[deploy\\]'"
```

### Lógica de Control
1. **Defecto (Skip)**: Si el mensaje del último commit **no** contiene la palabra `[deploy]`, el comando devuelve `0` (éxito para el ignore). Netlify interpreta esto como "no hay cambios relevantes" y cancela el build antes de que empiece a gastar minutos.
2. **Activación (Build)**: Si el mensaje **sí** incluye `[deploy]`, el comando `grep` falla (devuelve `1`), lo que indica a Netlify que **debe proceder** con el build y el despliegue.

## 🚀 Cómo Desplegar

Cuando quieras publicar tus cambios en producción, simplemente añade el flag al final de tu mensaje de commit:

```bash
git commit -m "Añadiendo nuevos casos de éxito [deploy]"
git push origin main
```

## 🔍 Cómo Auditar / Probar Localmente

Puedes probar si la lógica funciona en tu terminal local ejecutando:

```bash
# Prueba con un mensaje sin el flag (debería retornar 0 / silencioso)
git log -1 --pretty=%B | grep -qv '\[deploy\]'; echo $?

# Prueba con un mensaje que tenga [deploy] (debería retornar 1)
# (Para probar esto, tendrías que hacer un commit temporal con el flag)
```

## ⚠️ Consideraciones Importantes
- **Mayúsculas/Minúsculas**: La lógica actual distingue entre mayúsculas y minúsculas. Usa siempre `[deploy]` en minúsculas.
- **Primer Deploy**: El primer despliegue tras conectar el repositorio debe hacerse manualmente desde la UI de Netlify o comentando temporalmente la línea en el `.toml`.
- **Skip CI nativo**: También puedes usar `[skip ci]` si quieres lo contrario: que Netlify ignore el build incluso si otras herramientas de CI no lo harían.

---
*Documentación generada para el equipo de Mónica Montúfar.*
