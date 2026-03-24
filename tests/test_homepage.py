import pytest

def test_title():
    assert "Sora" in "Sora - The Ultimate Reading Experience"

def test_meta():
    assert "description" in "this is ......."

# create a test which have marker  "homepage"
def test_error():
    assert 1=10