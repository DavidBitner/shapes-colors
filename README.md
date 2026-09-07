# Shapes & Colors

A small experiment in mouse and keyboard events: shapes trail behind your cursor and fade out, with keyboard shortcuts to change their shape, color, background, and size.

**Live demo:** https://davidbitner.github.io/shapes-colors/

## Controls

| Key | Action |
| --- | --- |
| Move mouse | Draw shapes that trail behind the cursor |
| `Q` | Cycle shape |
| `W` | Random shape color |
| `E` | Random background color |
| `R` | Bigger |
| `T` | Smaller |
| `Esc` | Reset everything |

The current mouse coordinates are shown in the top-right corner.

## Running locally

This is a static site with no build step or dependencies. Clone the repo and open `index.html` in a browser, or serve it with any static file server:

```bash
git clone https://github.com/DavidBitner/shapes-colors.git
cd shapes-colors
npx serve .
```

## License

See [LICENSE](./LICENSE).
