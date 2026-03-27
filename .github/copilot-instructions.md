# Copilot Instructions for `sora.com`

## Build, test, and lint commands

- Install dependencies:
  - `python -m pip install --upgrade pip`
  - `pip install -r requirements.txt`
- Run all tests:
  - `pytest ./tests`
- Run a single test file:
  - `pytest tests/test_homepage.py`
- Run a single test function:
  - `pytest tests/test_homepage.py::test_title`

There is no configured lint step or build pipeline in this repository today. CI currently runs tests only via `.github/workflows/test.yml`.

## High-level architecture

This repository is a small static web page with lightweight browser-side JavaScript utilities and Python tests:

- `index.html` is the page entry point and currently contains minimal markup.
- `src/js/index.js` defines browser utilities:
  - `addMeta()` injects a viewport `<meta>` tag into `<head>`.
  - `getCookie()` parses cookies into a key/value object.
  - `runConsole()` conditionally loads Eruda when `sora_console=true` in cookies.
- `tests/test_homepage.py` contains pytest tests for homepage-related expectations and acts as the only automated quality gate in CI.

## Key conventions in this codebase

- Python tests live under `tests/` and are executed directly with `pytest ./tests` in CI.
- Keep homepage-facing checks in `tests/test_homepage.py` unless/ until the suite is split.
- Existing tests currently include placeholder/failing patterns (`assert 1 == 2`) and `pytest.xfail(...)`; treat this file as a work-in-progress baseline when adding or updating tests.
- Browser utility code is plain JavaScript (no bundler/tooling configured), so changes to `src/js/index.js` should remain compatible with direct browser execution.
