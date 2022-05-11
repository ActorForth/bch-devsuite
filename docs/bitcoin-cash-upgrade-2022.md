# Bitcoin Cash Upgrade 2022

On May 15th, 2022, Bitcoin Cash will undergo a technical upgrade to further expand its virtual machine (VM) contracting capabilities. bch-devsuite user have to perform the upgrade before that.

## Instructions

```bash
# Upgrade bch-devsuite to 1.3.0
git checkout 1.3.0

# Activate python virtualenv
source ./venv/bin/activate

# Install new dependencies
pip install -r requirements.txt

# Stop the running system
./bch-devsuite stop

# Upgrade stacks
./bch-devsuite upgrade

# Restart the system
./bch-devsuite start
```
